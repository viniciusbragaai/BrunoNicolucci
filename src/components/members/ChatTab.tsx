import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageCircle, Bot, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  message: string;
  is_from_user: boolean;
  created_at: string;
}

const ChatTab = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => { if (user) { fetchMessages(); subscribeToMessages(); } }, [user]);
  useEffect(() => { scrollToBottom(); }, [messages]);

  const fetchMessages = async () => {
    if (!user) return;
    const { data, error } = await supabase.from('chat_messages').select('*').eq('user_id', user.id).order('created_at', { ascending: true });
    if (error) console.error('Error fetching messages:', error);
    else setMessages(data || []);
  };

  const subscribeToMessages = () => {
    if (!user) return;
    const channel = supabase.channel('chat_messages').on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chat_messages', filter: `user_id=eq.${user.id}` }, (payload) => { setMessages((prev) => [...prev, payload.new as Message]); }).subscribe();
    return () => { supabase.removeChannel(channel); };
  };

  const scrollToBottom = () => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !user || isLoading) return;
    setIsLoading(true);
    const messageText = newMessage.trim();
    setNewMessage('');
    const { error: insertError } = await supabase.from('chat_messages').insert({ user_id: user.id, message: messageText, is_from_user: true });
    if (insertError) { toast({ title: 'Erro', description: 'Não foi possível enviar a mensagem', variant: 'destructive' }); setNewMessage(messageText); setIsLoading(false); return; }
    setTimeout(async () => {
      const responses = ['Olá! Obrigado por entrar em contato. Como posso ajudar você hoje?', 'Entendi sua dúvida! Vou verificar e retornar em breve.', 'Ótima pergunta! Deixa eu te explicar melhor...', 'Nosso time está analisando sua solicitação. Retornaremos em até 24h.', 'Perfeito! Qualquer outra dúvida, estou à disposição.'];
      await supabase.from('chat_messages').insert({ user_id: user.id, message: responses[Math.floor(Math.random() * responses.length)], is_from_user: false });
      setIsLoading(false);
    }, 1500);
  };

  const formatTime = (dateString: string) => new Date(dateString).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="space-y-6 h-[calc(100vh-8rem)] lg:h-[calc(100vh-4rem)] flex flex-col">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold mb-2 flex items-center gap-2 text-foreground"><MessageCircle className="h-7 w-7 text-primary" />Suporte</h1>
        <p className="text-muted-foreground">Converse com nosso time de consultores.</p>
      </div>

      <Card className="clean-card bg-background flex-1 flex flex-col overflow-hidden">
        <CardHeader className="border-b border-border py-3">
          <CardTitle className="text-base flex items-center gap-2 text-foreground">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            Reginaldo Gárcia - Suporte
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Bot className="h-8 w-8 text-primary" /></div>
              <h3 className="font-semibold mb-2 text-foreground">Iniciar Conversa</h3>
              <p className="text-sm text-muted-foreground max-w-xs">Envie uma mensagem para começar a conversar com nosso time de suporte.</p>
            </div>
          ) : (
            <AnimatePresence initial={false}>
              {messages.map((message) => (
                <motion.div key={message.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex items-end gap-2 ${message.is_from_user ? 'justify-end' : 'justify-start'}`}>
                  {!message.is_from_user && <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><Bot className="h-4 w-4 text-primary" /></div>}
                  <div className={`max-w-[80%] px-4 py-2 rounded-2xl ${message.is_from_user ? 'bg-primary text-primary-foreground rounded-br-md' : 'bg-secondary text-foreground rounded-bl-md'}`}>
                    <p className="text-sm">{message.message}</p>
                    <p className={`text-xs mt-1 ${message.is_from_user ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{formatTime(message.created_at)}</p>
                  </div>
                  {message.is_from_user && <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0"><User className="h-4 w-4 text-foreground" /></div>}
                </motion.div>
              ))}
            </AnimatePresence>
          )}
          {isLoading && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-end gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"><Bot className="h-4 w-4 text-primary" /></div>
              <div className="bg-secondary px-4 py-3 rounded-2xl rounded-bl-md">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </CardContent>

        <div className="p-4 border-t border-border">
          <form onSubmit={sendMessage} className="flex gap-2">
            <Input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Digite sua mensagem..." className="h-11" disabled={isLoading} />
            <Button type="submit" variant="teal" size="icon" className="h-11 w-11 shrink-0" disabled={!newMessage.trim() || isLoading}><Send className="h-5 w-5" /></Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default ChatTab;
