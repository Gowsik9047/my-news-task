import img1 from "../../assets/images/heading image 1.jpg"
import img2 from "../../assets/images/heading image 2.jpg"
import img3 from "../../assets/images/heading image 3.jpg"
import img4 from "../../assets/images/img1.jpg"
import img5 from "../../assets/images/img2.jpg"
import img6 from "../../assets/images/img3.jpg"
import img7 from "../../assets/images/img4.jpg"

// import NewsCard from "../NewsCard/newscard";
// import featuredData from "../../Data/datafeatured";

// function FeaturedNews() {
//   const [hero, ...rest] = featuredData;
//   const side = rest.slice(0, 2);
//   const smalls = rest.slice(2);

//   return (
//     <section className="featured-wrapper">
//       <div className="top-grid">
//         <div className="hero">
//           {/* <NewsCard article={hero} variant="hero" /> */}
//         </div>

//         <div className="side-col">
//           {/* {side.map((s) => (
//             <NewsCard key={s.id} article={s} variant="side" />
//           ))} */}
//         </div>
//       </div>

//       <div className="small-grid">
//         {/* {smalls.map((s) => (
//           <NewsCard key={s.id} article={s} variant="small" />
//         ))} */}
//       </div>
//     </section>
//   );
// }

// export default FeaturedNews;


import React from "react";

function FeaturedNews() {
  return (
    // <div className="featured-wrapper">
    //   {/* Top section */}
    //   <div className="top-grid">
    //     {/* Hero large card */}
    //     <div className="hero-card card">
    //       <img src={img1} alt="Hero" />
    //       <div className="card-tags">
    //         <span className="tag red">நேரலை</span>
    //         <span className="tag yellow">சுற்றுச்சூழல்</span>
    //       </div>
    //       <h2 className="card-title">
    //         சுற்றுச்சூழல் நீதிக்காக ஆயிரக்கணக்கான மக்கள் உலகளாவிய போராட்டங்களில் ஈடுபட்டுள்ளனர்.
    //       </h2>
    //       <p className="card-excerpt">
    //         இளைஞர் ஆர்வலர்கள் சுற்றுச்சூழல் கொள்கைகளில் உடனடி நடவடிக்கை எடுக்க கோருகின்றனர்.
    //       </p>
    //       <div className="card-footer">
    //         <span>கார்த்திக் ராஜன்</span>
    //         <span>2 மணி நேரம் முன்</span>
    //         <span className="video-icon">▶ Video</span>
    //       </div>
    //       <button className="btn-yellow">மேலும் படிக்க</button>
    //     </div>

    //     {/* Right side stacked medium cards */}
    //     <div className="side-cards">
    //       <div className="medium-card card">
    //         <img src={img2} alt="Side 1" />
    //         <div className="card-tags">
    //           <span className="tag orange">அவரசெய்தி</span>
    //           <span className="tag black">அரசியல்</span>
    //         </div>
    //         <h3 className="card-title">
    //           வரலாற்று வாக்குரிமை மசோதா மைல்கல் முடிவில் நிறைவேற்றப்பட்டது
    //         </h3>
    //         <div className="card-footer">
    //           <span>4 மணி நேரம் முன்</span>
    //         </div>
    //       </div>

    //       <div className="medium-card card">
    //         <img src={img3} alt="Side 2" />
    //         <div className="card-tags">
    //           <span className="tag red">நேரலை</span>
    //           <span className="tag purple">கலாச்சாரம்</span>
    //         </div>
    //         <h3 className="card-title">
    //           கலாச்சார திருவிழா பன்முகத்தன்மையும் ஒற்றுமையும் கொண்டாடுகிறது
    //         </h3>
    //         <div className="card-footer">
    //           <span>6 மணி நேரம் முன்</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Bottom grid of small cards */}
    //   <div className="small-grid">
    //     <div className="small-card card">
    //       <img src={img4} alt="Small 1" />
    //       <div className="card-tags">
    //         <span className="tag yellow">தொழில்நுட்பம்</span>
    //       </div>
    //       <h4 className="card-title">
    //         புதிய டிஜிட்டல் சட்டங்கள் பயனர் தரவை பாதுகாக்கின்றன
    //       </h4>
    //       <div className="card-footer">
    //         <span>7 மணி நேரம் முன்</span>
    //       </div>
    //     </div>

    //     <div className="small-card card">
    //       <img src={img5} alt="Small 2" />
    //       <div className="card-tags">
    //         <span className="tag yellow">சமூகம்</span>
    //       </div>
    //       <h4 className="card-title">
    //         சமூக தலைவர்கள் மலிவு வீட்டு தீர்வுகளுக்காக ஒன்றிணைகின்றனர்
    //       </h4>
    //       <div className="card-footer">
    //         <span>8 மணி நேரம் முன்</span>
    //       </div>
    //     </div>

    //     <div className="small-card card">
    //       <img src={img6} alt="Small 3" />
    //       <div className="card-tags">
    //         <span className="tag yellow">கல்வி</span>
    //       </div>
    //       <h4 className="card-title">
    //         மாணவர்கள் கல்வி சீர்திருத்தத்திற்காக ஒன்றிணைகிறார்கள்
    //       </h4>
    //       <div className="card-footer">
    //         <span>10 மணி நேரம் முன்</span>
    //       </div>
    //     </div>

    //     <div className="small-card card">
    //       <img src={img7} alt="Small 4" />
    //       <div className="card-tags">
    //         <span className="tag yellow">விசாரணை</span>
    //       </div>
    //       <h4 className="card-title">
    //         பெருநிறுவன முறைகேடுகளை அம்பலப்படுத்தும் விசாரணை
    //       </h4>
    //       <div className="card-footer">
    //         <span>1 நாள் முன்பு</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="featured-wrapper">
      {/* Top section */}
      <div className="top-grid">
        {/* Hero large card */}
        <div className="hero-card card bg-hero card-img-common">
          <div className="card-tags">
            <span className="tag red">நேரலை</span>
            <span className="tag yellow">சுற்றுச்சூழல்</span>
          </div>
          <h2 className="card-title">
            சுற்றுச்சூழல் நீதிக்காக ஆயிரக்கணக்கான மக்கள் உலகளாவிய போராட்டங்களில் ஈடுபட்டுள்ளனர்.
          </h2>
          <p className="card-excerpt">
            இளைஞர் ஆர்வலர்கள் சுற்றுச்சூழல் கொள்கைகளில் உடனடி நடவடிக்கை எடுக்க கோருகின்றனர்.
          </p>
          <div className="card-footer">
            <span>கார்த்திக் ராஜன்</span>
            <span>2 மணி நேரம் முன்</span>
            <span className="video-icon">▶ Video</span>
          </div>
          <button className="btn-yellow">மேலும் படிக்க</button>
        </div>

        {/* Right side stacked medium cards */}
        <div className="side-cards">
          <div className="medium-card card bg-side1 card-img-common">
            <div className="card-tags">
              <span className="tag orange">அவரசெய்தி</span>
              <span className="tag yellow">அரசியல்</span>
            </div>
            <h3 className="card-title">
              வரலாற்று வாக்குரிமை மசோதா மைல்கல் முடிவில் நிறைவேற்றப்பட்டது
            </h3>
            <div className="card-footer">
              <span>4 மணி நேரம் முன்</span>
            </div>
          </div>

          <div className="medium-card card bg-side2 card-img-common">
            <div className="card-tags">
              <span className="tag red">நேரலை</span>
              <span className="tag yellow">கலாச்சாரம்</span>
            </div>
            <h3 className="card-title">
              கலாச்சார திருவிழா பன்முகத்தன்மையும் ஒற்றுமையும் கொண்டாடுகிறது
            </h3>
            <div className="card-footer">
              <span>6 மணி நேரம் முன்</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom grid of small cards */}
      <div className="small-grid">
        <div className="small-card card bg-small1 card-img-common">
          <div className="card-tags">
            <span className="tag yellow">தொழில்நுட்பம்</span>
          </div>
          <h4 className="card-title">
            புதிய டிஜிட்டல் சட்டங்கள் பயனர் தரவை பாதுகாக்கின்றன
          </h4>
          <div className="card-footer">
            <span>7 மணி நேரம் முன்</span>
          </div>
        </div>

        <div className="small-card card bg-small2 card-img-common">
          <div className="card-tags">
            <span className="tag yellow">சமூகம்</span>
          </div>
          <h4 className="card-title">
            சமூக தலைவர்கள் மலிவு வீட்டு தீர்வுகளுக்காக ஒன்றிணைகின்றனர்
          </h4>
          <div className="card-footer">
            <span>8 மணி நேரம் முன்</span>
          </div>
        </div>

        <div className="small-card card bg-small3 card-img-common">
          <div className="card-tags">
            <span className="tag yellow">கல்வி</span>
          </div>
          <h4 className="card-title">
            மாணவர்கள் கல்வி சீர்திருத்தத்திற்காக ஒன்றிணைகிறார்கள்
          </h4>
          <div className="card-footer">
            <span>10 மணி நேரம் முன்</span>
          </div>
        </div>

        <div className="small-card card bg-small4 card-img-common">
          <div className="card-tags">
            <span className="tag yellow">விசாரணை</span>
          </div>
          <h4 className="card-title">
            பெருநிறுவன முறைகேடுகளை அம்பலப்படுத்தும் விசாரணை
          </h4>
          <div className="card-footer">
            <span>1 நாள் முன்பு</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedNews;
