

const cleanLinkedIn = (fullLink) => {
  let name = null;
  /// Try first matching to the https link
  // eslint-disable-next-line no-useless-escape
  const matchV1 = fullLink.match('https:\/\/www\.linkedin\.com\/in\/([a-zA-Z0123456789-]+)');
  const matchV2 = fullLink.match('www\.linkedin\.com\/in\/([a-zA-Z0123456789-]+)');

  if(matchV1) {
    name = matchV1[1];
    // console.log('first matched:', name)
  } else if (matchV2){
    name = matchV2[1];
    // console.log('second matched:', name)
  }
 
  return(name)
} // End cleanLinkedIn

module.exports = {
  cleanLinkedIn: cleanLinkedIn
}

//https://www.linkedin.com/in/lexyk/ => lexyk

//www.linkedin.com/in/lexyk/ => lexyk

//www.neopets.com/lexyk/ OR anything else => null

