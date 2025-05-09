import React, { useState } from 'react';
import '../styles/FamilyFunBooking.css';
import PaymentMethodSelector from './Payment';
import Footer from './Footer';

const dummyActivities = [
  {
    id: 1,
    name: 'Virtual Reality Arena',
    description: 'Immerse in VR games with the latest headsets.',
    price: 1500,
    image: 'images/vr.jpeg',
  },
  {
    id: 2,
    name: 'Laser Tag Showdown',
    description: 'Fun and action-packed laser tag for all ages.',
    price: 1000,
    image: '/images/Laser Arena, Paintball.jfif',
  },
  {
    id: 3,
    name: 'Board Game Lounge',
    description: 'Unlimited classic and new board games in cozy space.',
    price: 500,
    image: 'images/board.jpeg',
  },
  {
    id: 4,
    name: 'Trampoline Park',
    description: 'Jump and flip on a sea of trampolines, great for all ages!',
    price: 1200,
    image: 'images/line.jpeg',
  },
  {
    id: 5,
    name: 'Bowling Night',
    description: 'Gather the family for a thrilling bowling tournament.',
    price: 800,
    image: 'images/bowling.jpeg',
  },
  {
    id: 6,
    name: 'Go-Kart Racing',
    description: 'Race against friends and family on our exciting tracks.',
    price: 2000,
    image: 'images/kart.jpeg',
  },
  {
    id: 7,
    name: 'Mini Golf Adventure',
    description: 'Fun and challenging mini golf with themed courses.',
    price: 700,
    image: 'images/golf.jpeg',
  },
  {
    id: 8,
    name: 'Escape Room Challenge',
    description: 'Solve puzzles and unlock clues to escape within the time limit.',
    price: 1500,
    image: 'images/escape.jpeg',
  },
  {
    id: 9,
    name: 'Indoor Rock Climbing',
    description: 'Climb to new heights with our safe and fun rock climbing walls.',
    price: 1300,
    image: 'images/rock.jpeg',
  },
  {
    id: 10,
    name: 'Cinema Experience',
    description: 'Catch the latest blockbuster movies in high-definition.',
    price: 600,
    image: 'images/cinema.jpeg',
  },
  {
    id: 11,
    name: 'Cooking Classes',
    description: 'Learn to cook gourmet meals with professional chefs.',
    price: 1800,
    image: 'images/cooking.jpeg',
  },
  {
    id: 12,
    name: 'Ice Skating Rink',
    description: 'Glide across the ice rink with friends and family.',
    price: 1100,
    image: 'images/skate.jpeg',
  },
  {
    id: 13,
    name: 'Bungee Jumping Adventure',
    description: 'Feel the adrenaline rush with a thrilling bungee jump.',
    price: 2500,
    image: 'images/bungee.jpeg',
  },
  {
    id: 14,
    name: 'Aquarium Visit',
    description: 'Explore the wonders of the deep sea with a visit to our aquarium.',
    price: 400,
    image: 'images/aqua.jpeg',
  },
  {
    id: 15,
    name: 'Theme Park Adventure',
    description: 'Enjoy thrilling rides and family fun at the theme park.',
    price: 2200,
    image: 'images/theme.jpeg',
  },
];

const FamilyFunBooking = () => {
  const [selected, setSelected] = useState(null);
  const [date, setDate] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [receipt, setReceipt] = useState(null);
  const [isPaid, setIsPaid] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handleBook = () => {
    if (!selected || !date || quantity < 1 || !selectedPaymentMethod)
      return alert('Please fill all fields and select a payment method.');

    const total = selected.price * quantity;
    const receiptData = {
      activity: selected.name,
      date,
      quantity,
      total,
      reference: selectedPaymentMethod + Math.floor(Math.random() * 1000000),
    };
    setReceipt(receiptData);

    setIsPaid(true);
    setTimeout(() => {
      setIsPaid(false);
      alert('Payment successful! Receipt sent to your email.');
      setSelected(null);  
    }, 2000);
  };

  const handlePaymentMethodSelected = (method) => {
    setSelectedPaymentMethod(method);
  };

  const closeOverlay = () => {
    setSelected(null);   };

  return (
    <div className="booking-container">
      <h2 className="booking-title">Family Fun Activities</h2>

      <div className="activity-list">
        {dummyActivities.map((activity) => (
          <div
            key={activity.id}
            className={`activity-card ${selected?.id === activity.id ? 'selected' : ''}`}
            onClick={() => setSelected(activity)}  
          >
            <img src={activity.image} alt={activity.name} />
            <div className="details">
              <h3>{activity.name}</h3>
              <p>{activity.description}</p>
              <p className="price">KES {activity.price}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="payment-overlay">
          <div className="payment-method-container">
            <button className="cancel-btn" onClick={closeOverlay}>Cancel</button>
            <PaymentMethodSelector onPaymentMethodSelected={handlePaymentMethodSelected} />
            <div className="booking-form">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                placeholder="Quantity"
              />
            </div>
            <button
              onClick={handleBook}
              className={`pay-btn ${isPaid ? 'paid' : ''}`}
              disabled={isPaid}
            >
              {isPaid ? 'Processing Payment...' : 'Pay Now'}
            </button>
          </div>
        </div>
      )}

      {receipt && (
        <div className="receipt">
          <h3>Booking Receipt</h3>
          <p><b>Activity:</b> {receipt.activity}</p>
          <p><b>Date:</b> {receipt.date}</p>
          <p><b>Quantity:</b> {receipt.quantity}</p>
          <p><b>Total Paid:</b> KES {receipt.total}</p>
          <p><b>Reference:</b> {receipt.reference}</p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default FamilyFunBooking;
