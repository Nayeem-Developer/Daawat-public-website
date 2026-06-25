import PolicyLayout from '../components/PolicyLayout.jsx'

const sections = [
  {
    title: 'Information We Collect',
    points: [
      'Daawat may collect customer name, phone number, delivery address, order details, payment status, and support messages for order processing and delivery.',
      'This information is collected only as needed to support restaurant operations, customer communication, and order fulfillment.',
    ],
  },
  {
    title: 'How We Use Information',
    points: [
      'Customer information may be used to confirm orders, coordinate delivery, share order updates, and respond to customer support requests.',
      'Daawat may also review order details and support messages to improve service quality and reduce delivery issues.',
    ],
  },
  {
    title: 'Payment Information',
    points: [
      'Online payments are processed through Razorpay. Daawat does not store sensitive card details, UPI PIN, net banking password, or payment credentials.',
      'Only limited payment status details necessary for confirming and managing an order may be available to the restaurant.',
    ],
  },
  {
    title: 'Data Sharing',
    points: [
      'Customer information is shared only when required to complete restaurant services such as order handling, delivery coordination, or payment confirmation.',
      'Daawat does not sell customer personal data to third parties.',
    ],
  },
  {
    title: 'Data Security',
    points: [
      'Reasonable steps are taken to protect customer information from unauthorized access, misuse, or unnecessary disclosure.',
      'Despite those efforts, no method of internet transmission or storage can be guaranteed as completely secure.',
    ],
  },
  {
    title: 'Customer Support',
    points: [
      'Support messages, calls, and order discussions may be used to resolve complaints, verify issues, and improve customer service.',
      'Customers may contact Daawat directly for any privacy-related questions connected to orders or support communication.',
    ],
  },
  {
    title: 'Contact Us',
    points: [
      'For privacy questions or support, customers may contact Daawat through the public contact details listed on this website.',
    ],
  },
]

function PrivacyPolicy() {
  return (
    <PolicyLayout
      eyebrow="Privacy Policy"
      intro="This Privacy Policy explains how Daawat handles customer information connected to food ordering, delivery support, and payment confirmation."
      sections={sections}
      title="Privacy Policy for Daawat"
    />
  )
}

export default PrivacyPolicy
