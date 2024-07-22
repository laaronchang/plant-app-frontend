import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      <div className="modal-background">
        <section className="modal-main">
          {props.children}
          <button className="close" type="button" onClick={props.onClose}>
            &#x2715;
          </button>
        </section>
      </div>
      
      // <div class="container">
      // <div class="card__container">
      //   <article class="card__article">
      //        <section className="modal-main">
      //        {props.children}
      //        <button className="close" type="button" onClick={props.onClose}>
      //          &#x2715;
      //        </button>
      //      </section>
      //     <div class="card__data">
      //       <span class="card__description"></span>
      //       <h2 class="card title"></h2>
      //       <a href="#" class="card__button">Read More</a>
      //     </div>
      //   </article>
      // </div>
      // </div>
    );
  }
}




