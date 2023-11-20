import './footer.styles.css'

export default function Header() {
  return (
    <div className="footer">
      <p>
      Copyright (c) 2023 <span style={{ margin: '10px' }}>|</span>  Clarifionsupport@clarifion.com
      </p>
      <p><img src="img/icon-candado.svg" alt="icon candado" style={{ marginRight: '10px' }} />Secure 256-bit SSL encryption.</p>
    </div>
  )
}
