import "./styles/Aarti.css";
import { Link } from "react-router-dom";

export default function Aarti() {
  const Aarti = [
    {
      id: "1",
      dev: "Mahadev",
      lyrics: {
        verse1:
          "ॐ जय शिव ओंकारा,\n" +
          "स्वामी जय शिव ओंकारा।\n" +
          "ब्रह्मा, विष्णु, सदाशिव,\n" +
          "अर्द्धांगी धारा ॥\n" +
          "ॐ जय शिव ओंकारा...॥",
        verse2:
          "एकानन चतुरानन\n" +
          "पंचानन राजे ।\n" +
          "हंसासन गरूड़ासन\n" +
          "वृषवाहन साजे ॥\n" +
          "ॐ जय शिव ओंकारा...॥",
        verse3:
          "दो भुज चार चतुर्भुज\n" +
          "दसभुज अति सोहे ।\n" +
          "त्रिगुण रूप निरखते\n" +
          "त्रिभुवन जन मोहे ॥\n" +
          "ॐ जय शिव ओंकारा...॥",
        verse4:
          "अक्षमाला वनमाला,\n" +
          "मुण्डमाला धारी ।\n" +
          "चंदन मृगमद सोहै,\n" +
          "भाले शशिधारी ॥\n" +
          "ॐ जय शिव ओंकारा...॥",
        verse5:
          "श्वेताम्बर पीताम्बर\n" +
          "बाघम्बर अंगे ।\n" +
          "सनकादिक गरुणादिक\n" +
          "भूतादिक संगे ॥\n" +
          "ॐ जय शिव ओंकारा...॥",
        verse6:
          "कर के मध्य कमंडल\n" +
          "चक्र त्रिशूलधारी ।\n" +
          "सुखकारी दुखहारी\n" +
          "जगपालन कारी ॥\n" +
          "ॐ जय शिव ओंकारा...॥",
        verse7:
          "ब्रह्मा विष्णु सदाशिव\n" +
          "जानत अविवेका ।\n" +
          "प्रणवाक्षर में शोभित\n" +
          "ये तीनों एका ॥\n" +
          "ॐ जय शिव ओंकारा...॥",
        verse8:
          "त्रिगुणस्वामी जी की आरति\n" +
          "जो कोइ नर गावे ।\n" +
          "कहत शिवानंद स्वामी\n" +
          "सुख संपति पावे ॥\n" +
          "ॐ जय शिव ओंकारा...॥",
      },
    },
  ];

  return (
    <>
      {Aarti.map((aarti) => {
        return (
          <>
            <Link key={aarti.id} to={`/aarti/${aarti.id}`}>
              {aarti.dev}
            </Link>
          </>
        );
      })}
    </>
  );
}

export function AartiPage({ aarti }) {
  return (
    <>
      <header class="AartiPage-hero"></header>
      <article id="AartiPage-article">
        <h1>
          Hero Article Title
          <span class="AartiPage-byline"> by Jeff</span>
        </h1>
        <p>Aarti here</p>
      </article>
    </>
  );
}
