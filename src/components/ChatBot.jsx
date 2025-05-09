import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import '../styles/Chatbot.css';

const pairs = [
  {
    pattern: /hello|hi|hey|good|morning|evening|afternoon|hy/i,
    responses: ["Hello, how may I help you today?", "Hi, what can I do for you?"]
},
{
    pattern: /how are you|hyd|whats up|sup/i,
    responses: ["I'm just a bot, but I'm here to help!", "Doing great, ready to assist!"]
},
{
    pattern: /bye|goodbye|see you/i,
    responses: ["Goodbye! Come back anytime.", "See you again soon!"]
},
{
    pattern: /gaming|equipment|gear|accessories/i,
    responses: ["We offer a wide range of gaming equipment. What are you looking for specifically?", "Check out our gaming gear section for the latest products!"]
},
{
    pattern: /family fun activities|bookings|events|fun/i,
    responses: ["You can book family fun activities directly on our website. Would you like assistance with that?", "We have exciting family fun activities available. Let me know if you'd like to make a booking!"]
},
{
    pattern: /price|cost|how much/i,
    responses: ["Our prices vary depending on the product or activity. Could you specify what you're interested in?", "Please check our website for detailed pricing information."]
},
{
    pattern: /deliver|shipping/i,
    responses: ["We offer fast and reliable delivery services. Would you like to know more about shipping options?", "Our shipping is quick and secure. Let me know if you have specific questions!"]
},
{
    pattern: /refund|return policy/i,
    responses: ["We have a customer-friendly return policy. Would you like me to explain it?", "You can find details about our refund and return policy on our website."]
},
{
    pattern: /discount|sale|offers/i,
    responses: ["We have exciting discounts and offers. Check out our website for the latest deals!", "Looking for discounts? Visit our offers section for great deals!"]
},
{
    pattern: /support|help|assistance/i,
    responses: ["I'm here to help! What do you need assistance with?", "Feel free to ask me anything. I'm here to assist!"]
},
{
    pattern: /opening hours|working hours|timing/i,
    responses: ["Our working hours are from 7 AM to 9 PM. Let me know if you need more details!", "We are open from 7 AM to 9 PM every day. How can I assist you?"]
},
{
    pattern: /location|address|where are you/i,
    responses: ["We are located at 123 Business Street, building 101, Nairobi, NRBI 0100. Let me know if you need directions!", "Our address is 123 Business Street, building 101, Nairobi, NRBI 0100. Feel free to visit us!"]
},
{
    pattern: /membership|loyalty program|member/i,
    responses: ["We offer a loyalty program with great benefits. Would you like to know more?", "Join our membership program for exclusive perks and rewards!"]
},
{
    pattern: /payment methods|how to pay|pay/i,
    responses: ["We accept various payment methods including credit cards, PayPal, and M-pesa. Let me know if you need details!", "You can pay using multiple options. Check our payment section for more info!"]
},
{
    pattern: /gaming consoles|xbox|playstation|game/i,
    responses: ["We have the latest gaming consoles available. Would you like to know more?", "Check out our collection of gaming consoles for the best experience!"]
},
{
    pattern: /VR|virtual reality/i,
    responses: ["We offer VR equipment and experiences. Would you like to explore?", "Virtual Reality is amazing! Let me know if you'd like to know more about our VR offerings."]
},
{
    pattern: /arcade games|arcade/i,
    responses: ["Our arcade section is packed with fun games. Would you like to book a session?", "Arcade games are a blast! Let me know if you'd like to know more."]
},
{
    pattern: /team building|corporate events/i,
    responses: ["We host team-building activities and corporate events. Would you like to book one?", "Corporate events are our specialty. Let me know if you'd like to plan one!"]
},
{
    pattern: /gift cards|vouchers/i,
    responses: ["We offer gift cards and vouchers. Would you like to purchase one?", "Gift cards are a great choice! Let me know if you'd like to buy one."]
},
{
    pattern: /tournaments|competitions/i,
    responses: ["We host gaming tournaments regularly. Would you like to participate?", "Competitions are exciting! Let me know if you'd like to join one."]
},
{
    pattern: /wifi|internet/i,
    responses: ["We provide free Wi-Fi for our customers. Let me know if you need the details!", "Enjoy free Wi-Fi while you're here! Let me know if you need assistance."]
},
{
    pattern: /snacks|food|drinks/i,
    responses: ["We have a variety of snacks and drinks available. Would you like to see the menu?", "Grab a bite while you enjoy! Let me know if you'd like to order something."]
},
{
    pattern: /safety|precautions|measures/i,
    responses: ["We follow strict safety measures to ensure your well-being. Let me know if you have concerns!", "Your safety is our priority. Feel free to ask about our precautions."]
},
{
    pattern: /kids activities|children fun/i,
    responses: ["We have a variety of activities for kids. Would you like to explore them?", "Children will love our fun activities! Let me know if you'd like more details."]
},
{
    pattern: /custom packages|tailored services/i,
    responses: ["We offer custom packages to suit your needs. Would you like to discuss options?", "Tailored services are available! Let me know your requirements."]
},
{
    pattern: /.*?/,
    responses: ["Sorry, could you repeat that?", "I didn't quite catch that, could you rephrase?"]
}
];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there, I'm Digel. Type something to start chatting.", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(msgs => [...msgs, { text: input, isBot: false }]);

    const matched = pairs.find(pair => pair.pattern.test(input));
    const response = matched
      ? matched.responses[Math.floor(Math.random() * matched.responses.length)]
      : "Sorry, could you repeat that?";

    setTimeout(() => {
      setMessages(msgs => [...msgs, { text: response, isBot: true }]);
    }, 600);

    setInput("");
  };

  return (
    <>
      {!open && (
        <div className="chatbot-badge" onClick={() => setOpen(true)}>
          <MessageSquare />
        </div>
      )}

      {open && (
        <div className="chatbot-container">
          <div className="chat-header">
            <span>Chat with Digel</span>
            <button className="chat-close-btn" onClick={() => setOpen(false)}>X</button>
          </div>

          <div className="chat-window">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={msg.isBot ? 'bot-message' : 'user-message'}
              >
                {msg.text}
              </div>
            ))}
            <div ref={endOfMessagesRef} />
          </div>

          <div className="input-area">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="What's on your mind?"
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
