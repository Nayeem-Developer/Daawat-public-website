import PolicyLayout from '../components/PolicyLayout.jsx'

const sections = [
  {
    title: 'Use of Service',
    points: [
      'This website provides public restaurant information about Daawat, including menu details, service policies, and customer contact information.',
      'Customers may use the service only for genuine food ordering inquiries and customer support communication.',
    ],
  },
  {
    title: 'Service Area',
    points: [
      'Daawat currently serves customers within Srikalahasti, Andhra Pradesh.',
      'Orders requested outside the available service area may not be accepted.',
    ],
  },
  {
    title: 'Menu and Pricing',
    points: [
      'Menu items and pricing are shared for public reference and may change based on availability, ingredient supply, or restaurant decisions.',
      'Customers are encouraged to confirm current availability and pricing before finalizing an order.',
    ],
  },
  {
    title: 'Orders',
    points: [
      'Order acceptance depends on restaurant availability, delivery feasibility, and successful communication with the customer.',
      'Customers must provide correct phone number and delivery address.',
    ],
  },
  {
    title: 'Payments',
    points: [
      'Cash on Delivery and Online Payments may be available depending on order/payment status.',
      'Online payment processing may be handled through approved payment providers such as Razorpay.',
    ],
  },
  {
    title: 'Customer Responsibility',
    points: [
      'Customers are responsible for sharing accurate order details, reachable contact information, and correct delivery instructions.',
      'Delays or issues caused by incomplete customer information may affect service quality or order completion.',
    ],
  },
  {
    title: 'Order Rejection',
    points: [
      'Daawat reserves the right to reject, cancel, or hold an order in case of unavailability, service area mismatch, suspicious activity, or inability to contact the customer.',
    ],
  },
  {
    title: 'Limitation of Liability',
    points: [
      'Daawat is not responsible for delays or losses caused by traffic, weather, incorrect customer details, network issues, or other circumstances outside reasonable restaurant control.',
    ],
  },
  {
    title: 'Contact',
    points: [
      'Customers may use the contact details published on this website for order assistance, policy questions, or service clarification.',
    ],
  },
]

function TermsAndConditions() {
  return (
    <PolicyLayout
      eyebrow="Terms and Conditions"
      intro="These terms describe how Daawat provides restaurant ordering information, delivery support, and payment options for customers in Srikalahasti."
      sections={sections}
      title="Terms and Conditions"
    />
  )
}

export default TermsAndConditions
