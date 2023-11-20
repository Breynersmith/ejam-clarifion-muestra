import './title.styles.css'
function Title() {
  const titleStyle = {
    fontFamily: 'Manrope',
    fontSize:  '2rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '140%', 
    textTransform: 'capitalize',
  };

  const spanStyle = {
    color: '#2C7EF8',
  };
  return (
    <p className='title-product' style={titleStyle}>
                    <span style={spanStyle}>ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span style={spanStyle}>$14 each</span> ($84.00
                    total!)
    </p>
  )
}

export default Title
