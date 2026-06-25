import PolicyLayout from '../components/PolicyLayout.jsx'

const sections = [
  {
    title: 'Delivery Area',
    points: [
      'Delivery is currently available only within Srikalahasti, Andhra Pradesh.',
      'Orders outside the supported service area may not be accepted for delivery.',
    ],
  },
  {
    title: 'Delivery Time',
    points: [
      'Delivery time may vary based on order load, distance, traffic, weather, and restaurant availability.',
      'Estimated timing may be shared as a guidance only and is not a guaranteed delivery commitment.',
    ],
  },
  {
    title: 'Customer Address Responsibility',
    points: [
      'Customers must provide correct and complete delivery address and reachable phone number.',
      'Incorrect or incomplete address details may delay or prevent successful order delivery.',
    ],
  },
  {
    title: 'Phone Confirmation',
    points: [
      'Daawat may call the customer to confirm the order or exact delivery location.',
      'Orders may be delayed or cancelled if the customer cannot be reached for required confirmation.',
    ],
  },
  {
    title: 'Outside Service Area',
    points: ['Orders outside the service area may be rejected or cancelled.'],
  },
  {
    title: 'Delivery Issues',
    points: [
      'Customers should report delivery issues as soon as possible so the restaurant can review the order and provide support where appropriate.',
      'Service disruptions due to traffic, weather, or customer unavailability may affect delivery outcomes.',
    ],
  },
  {
    title: 'Contact',
    points: [
      'For delivery support, address confirmation, or service questions, customers may contact Daawat directly using the public contact information on this website.',
    ],
  },
]

function DeliveryPolicy() {
  return (
    <PolicyLayout
      eyebrow="Delivery Policy"
      intro="This Delivery Policy explains the current service area, timing expectations, and customer responsibilities for receiving an order from Daawat."
      sections={sections}
      title="Delivery Policy"
    />
  )
}

export default DeliveryPolicy
