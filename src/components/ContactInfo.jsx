
function ContactInfo({Icon, children}) {
  if (!children) return null;

  return (
    <div className="contact-info">
      <Icon />
      {children}
    </div>
  )
}

export default ContactInfo;