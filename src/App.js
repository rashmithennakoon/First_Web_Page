import React, { useState } from 'react';
import './App.css';

function App() {
  const [showText, setShowText] = useState(true);
  const [showTulip, setShowTulip] = useState(true);
  const [showSun, setShowSun] = useState(true);
  const [showDaf, setShowDaf] = useState(true);

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const imageUrl = 'https://www.pixelstalk.net/wp-content/uploads/images1/Beaufiful-Summer-Flower-Backgrounds.jpg';
  const image1 = 'https://www.treloarroses.com.au/image/cache/catalog/productImages/Gallipoli_6891-800x800.jpg';
  const newImageUrl = 'https://www.fiordalisa.ch/wp-content/uploads/2017/12/IMG_4589-1.jpg';
  const image2 = 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71sQOlkixLL._AC_UF1000,1000_QL80_.jpg';
  const tup = 'https://i.etsystatic.com/22503252/r/il/714ca3/2280749960/il_fullxfull.2280749960_tqw2.jpg';
  const image3 = 'https://mckenzieseeds.com/cdn/shop/products/Mck_Annual_140150_Sunflower_GoldenHedge_front.jpg?v=1654719745';
  const sun = 'https://images.albertsons-media.com/is/image/ABS/970016072?$ng-ecom-pdp-desktop$&defaultImage=Not_Available';
  const image4 = 'https://www.chicagobotanic.org/sites/default/files/inline-images/%20narcissus_canaliculatus_600x600.jpg';
  const daf = 'https://www.flowersbyflourish.com/wp-content/uploads/2021/03/Daf2-e1615217690839.jpg';
  const newDescription = 'The rose, a timeless symbol of love and beauty, is a perennial flowering plant belonging to the genus Rosa within the family Rosaceae. Renowned for its exquisite appearance and captivating fragrance, the rose has captured the hearts of people worldwide. With a diverse range of colors, including classic reds, delicate pinks, pristine whites, and vibrant yellows, roses showcase a stunning array of hues, making them a popular choice in gardens, bouquets, and floral arrangements. Beyond its aesthetic allure, the rose holds deep cultural and symbolic significance. The red rose, perhaps the most iconic of all, is often associated with expressions of love and passion, making it a popular choice for romantic gestures. White roses, symbolizing purity and innocence, convey sentiments of serenity and grace. Throughout history, poets, artists, and writers have drawn inspiration from the rose, weaving its symbolism into the fabric of literature, art, and folklore. Cultivated in a multitude of varieties and hybrids, roses require careful nurturing. Gardeners appreciate their versatility, using them to create landscapes of breathtaking beauty. Proper care involves attention to soil quality, sunlight, and pruning, ensuring the health and vitality of these cherished blooms. Roses flourish not only in gardens but also find their way into homes as cut flowers, adorning spaces with their timeless elegance. The rose extends its influence beyond the realms of aesthetics. Its fragrant essence has been harnessed in the perfume industry, contributing to the creation of delightful and sophisticated scents. In addition to its cultural and commercial importance, the rose holds a place in herbal and alternative medicine. Rose petals, rosehip, and rose oil are believed to possess various health benefits, influencing skincare practices and aromatherapy. In conclusion, the rose stands as a multifaceted emblem, embodying both visual and symbolic richness. Its presence in art, literature, and various cultural traditions testifies to the enduring fascination and admiration humans hold for this exquisite flower, making it a timeless and cherished icon across the globe.';
  const des1 = 'The tulip, a graceful and vibrant flowering bulb, is celebrated for its enchanting beauty and holds a prominent place in the world of horticulture. Belonging to the genus Tulipa, this perennial plant is renowned for its distinctive cup-shaped flowers and striking array of colors. Tulips grace gardens, parks, and floral arrangements with their elegant presence, making them a symbol of renewal, springtime, and new beginnings. With a wide spectrum of hues ranging from bold reds and pinks to soft purples, yellows, and whites, tulips offer a diverse and visually captivating display. Their simple yet sophisticated structure consists of six petals that open to reveal a central pistil and stamens. The unique shapes and vivid colors of tulips make them a sought-after choice for gardeners, landscape designers, and florists alike. Originating from Central Asia and later becoming synonymous with Dutch culture, tulips have a rich history. During the 17th century, tulips experienced an economic and cultural phenomenon known as "tulip mania" in the Netherlands, where the bulbs were highly sought after and reached extraordinary prices. Today, tulips continue to be associated with the Netherlands, where they are prominently featured in the Keukenhof Gardens and annual tulip festivals. Cultivating tulips requires attention to specific growing conditions. These plants thrive in well-drained soil and are ideally suited to temperate climates. Tulip bulbs are typically planted in the fall, lying dormant through the winter before emerging in a burst of color during the spring. Their resilience and adaptability contribute to their popularity as ornamental plants, symbolizing the beauty of life cyclical nature. The allure of tulips extends beyond their visual appeal. They have inspired poets and artists throughout the centuries, symbolizing themes of love, elegance, and the fleeting nature of beauty. The delicate fragrance and graceful form of tulips evoke a sense of serenity and joy, making them a cherished addition to gardens and floral arrangements worldwide. In essence, the tulip stands as a symbol of natural grace and seasonal renewal, captivating hearts with its vibrant colors and elegant form. Whether adorning landscapes, serving as gifts, or featured in cultural celebrations, the tulip timeless charm continues to make it a beloved and enduring flower.';
  const des2 = 'Sunflowers (Helianthus) stand tall and proud, their vibrant blooms capturing the essence of summer fields and the brilliance of sunny days. These striking plants are renowned for their towering stature, with some varieties reaching towering heights, creating a spectacle that commands attention. At the heart of the sunflower allure is its distinctive flower head. The large, circular bloom consists of a central disk surrounded by petal-like ray florets, creating a stunning display of contrasting colors. The outer petals, known as rays, often exhibit a brilliant yellow hue, radiating warmth and positivity. The central disk, varying from rich brown to golden yellow, adds depth and complexity to the overall floral composition. Sunflowers are annual plants, completing their life cycle within a single growing season. Their journey begins with the germination of seeds, developing into robust stems that steadily rise towards the sky. During their blooming phase, young sunflowers display heliotropism, an enchanting behavior where the flower heads follow the sun movement across the sky, symbolizing an unwavering pursuit of light. One cannot overlook the significance of sunflower seeds, a prominent feature that contributes to the plant ecological importance. Large, flat, and rich in nutrients, these seeds serve as a valuable food source for both humans and wildlife. Birds, in particular, flock to sunflowers, feasting on the seeds and aiding in the plant natural process of seed dispersal. Culturally, sunflowers hold symbolic value. Often associated with positivity, adoration, and longevity, these blooms have found their way into various forms of art and literature. Vincent van Gogh iconic "Sunflowers" series is a testament to the timeless beauty and allure that sunflowers evoke. In gardens, sunflowers are not just flora; they are living sculptures that add a dynamic and cheerful presence to any landscape. From dwarf varieties suitable for small garden spaces to towering giants that captivate with their grandeur, sunflowers offer versatility in cultivation. Beyond aesthetics, sunflowers play a vital role in supporting biodiversity. Their nectar and pollen attract essential pollinators, contributing to the health of ecosystems. In agriculture, certain sunflower varieties are cultivated for their oil-rich seeds, valued for culinary purposes and the production of sunflower oil.';
  const des3 = 'Daffodils, scientifically known as Narcissus, herald the arrival of spring with their dazzling display of vibrant blossoms. These perennial bulbs are cherished for their iconic trumpet-shaped flowers, which come in an array of colors ranging from cheerful yellows and whites to delicate pinks and oranges. Their botanical name pays homage to the mythological character Narcissus, who, according to Greek mythology, transformed into a flower. As the winter chill begins to wane, daffodils emerge from the soil, signaling the renewal of life and the promise of warmer days. Characterized by a central trumpet-shaped corona surrounded by six petal-like tepals, the flowers stand atop sturdy stems, swaying gracefully in the breeze. Daffodils are often referred to as "jonquils" or "narcissi," reflecting the diversity within this genus. One of the distinctive features of daffodils is their resilience and adaptability. These hardy flowers thrive in various environments, from garden borders and woodland settings to meadows and rocky slopes. Their ability to naturalize allows them to multiply and return year after year, creating expansive carpets of color. Beyond their aesthetic appeal, daffodils carry symbolic significance. They are often associated with themes of renewal, hope, and the triumph of life over winter dormancy. In many cultures, daffodils are considered symbols of good fortune and prosperity, making them popular choices for spring celebrations and festive occasions. Cultivating daffodils is a rewarding experience for gardeners. These low-maintenance plants require minimal care, thriving in well-drained soil and partial sunlight. Daffodil bulbs are planted in the fall, allowing them to establish roots before the onset of winter. Once in bloom, daffodils add a burst of color to gardens, creating a lively and welcoming atmosphere. Daffodils also play a role in environmental conservation. Their toxicity to animals, particularly deer and rodents, makes them resistant to browsing, contributing to their survival and propagation. As early bloomers, they provide essential nectar for pollinators, supporting the health of local ecosystems.';

    
  const handleButtonClick = () => {
    setShowText(!showText);
    setShowTulip(true);
    setShowSun(true);
    setShowDaf(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Add smooth scrolling effect
});
    
  };
  const handleButtonClick1 = () => {
    setShowTulip(!showTulip);
    setShowText(true);
    setShowSun(true);
    setShowDaf(true);

    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Add smooth scrolling effect
});
  };
  const handleButtonClick2 = () => {
    setShowSun(!showSun);
    setShowText(true);
    setShowTulip(true);
    setShowDaf(true);

    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Add smooth scrolling effect
});
  };
  const handleButtonClick3 = () => {
    setShowDaf(!showDaf);
    setShowText(true);
    setShowTulip(true);
    setShowSun(true);

    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Add smooth scrolling effect
});
  };

  

  return (
    <div className="App">
      {!showText && (
        <div>
          {/* New elements to be displayed when showText is false */}
          <img id="im2" src={newImageUrl} alt="New Image" />
          <h2 id='top'>Rose</h2>
          <p id='dis'>{newDescription}</p>
        </div>
      )}
      {!showTulip && (
        <div>
          {/* New elements to be displayed when showTulip is false */}
          <img id="im2" src={tup} alt="New Image" />
          <h2 id='top'>Tulip</h2>
          <p id='dis'>{des1}</p>
        </div>
      )}
      {!showSun && (
        <div>
          {/* New elements to be displayed when showTulip is false */}
          <img id="im2" src={sun} alt="New Image" />
          <h2 id='top'>Sun Flowers</h2>
          <p id='dis'>{des2}</p>
        </div>
      )}
      {!showDaf && (
        <div>
          {/* New elements to be displayed when showTulip is false */}
          <img id="im2" src={daf} alt="New Image" />
          <h2 id='top'>Daffodil</h2>
          <p id='dis'>{des3}</p>
        </div>
      )}

      <div style={{ display: showText ? 'block' : 'none' }}>
      <div style={{ display: showTulip ? 'block' : 'none' }}>
      <div style={{ display: showSun ? 'block' : 'none' }}>
      <div style={{ display: showDaf ? 'block' : 'none' }}>
        <img id="im" src={imageUrl} alt="Famous Flowers" />
        <div style={textStyle}>
          <h1>Famous Flowers</h1>
        </div>
      


        <h2 id='flo'>Most Beautiful Flowers in the World</h2>
        <img className={`imm1 ${showText ? 'visible' : 'hidden'}`} id="im1" src={image1} alt="Description of the image" />
        <h2 id='rose'>Rose</h2>
        <button className='nm' onClick={handleButtonClick}>View Rose</button>

        <img className={`imm1 ${showTulip ? 'visible' : 'hidden'}`} id="imm2" src={image2} alt="Description of the image" />
        <h2 id='tul'>Tulip</h2>
        <button className='nm1' onClick={handleButtonClick1}>View Tulip</button> 

        <img className={`imm1 ${showSun ? 'visible' : 'hidden'}`} id="imm3" src={image3} alt="Description of the image" />
        <h2 id='su'>Sun Flowers</h2>
        <button className='nm2' onClick={handleButtonClick2}>View Sun Flowers</button> 

        <img className={`imm1 ${showDaf ? 'visible' : 'hidden'}`} id="imm4" src={image4} alt="Description of the image" />
        <h2 id='da'>Daffodil</h2>
        <button className='nm3' onClick={handleButtonClick3}>View Daffodil</button> 

      </div>
      </div>
      </div>
      </div>

      <footer>
      <p>&copy; 2024 Famouse Flowers</p>
    </footer>
    </div>
  );
}

export default App;


