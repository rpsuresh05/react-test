import React, { useRef } from "react";
import Modal from "./Modal";

function ModalWrapper() {
  const [open, setOpen] = React.useState(false);
  const triggerRef = useRef(null);

  return (
    <>
      <Modal
        triggerRef={triggerRef}
        open={open}
        handleClose={() => setOpen(false)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        error corporis, doloribus itaque qui veritatis natus atque pariatur
        consequatur tempore quisquam autem eaque repellendus fuga quia ea saepe,
        hic soluta! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Non odit eos iure sunt sapiente a blanditiis recusandae vel optio
        pariatur. Nesciunt odit rem, dolorem qui inventore optio blanditiis et
        esse. Consequatur sint ipsam, molestias nisi maxime magni neque cum
        itaque, nesciunt fugiat delectus aut ducimus quidem iusto. Dolor, ut
        veritatis. Pariatur at tempore laudantium alias, blanditiis enim
        laboriosam ipsa iusto. Et, maxime molestias repellendus quam eos
        inventore recusandae illo nostrum distinctio debitis vero, deleniti
        laudantium error voluptatibus modi. Neque enim numquam odit nostrum
        dolorem earum illo temporibus reiciendis exercitationem repudiandae!
        Odio vel distinctio numquam nam fuga ut recusandae. Voluptatibus rerum
        dolore vero dolores consequuntur pariatur, sapiente, et incidunt quos
        aliquam, deleniti adipisci delectus nulla. Tempore libero suscipit dolor
        similique fugit.
      </Modal>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non odit eos
        iure sunt sapiente a blanditiis recusandae vel optio pariatur. Nesciunt
        odit rem, dolorem qui inventore optio blanditiis et esse. Consequatur
        sint ipsam, molestias nisi maxime magni neque cum itaque, nesciunt
        fugiat delectus aut ducimus quidem iusto. Dolor, ut veritatis. Pariatur
        at tempore laudantium alias, blanditiis enim laboriosam ipsa iusto. Et,
        maxime molestias repellendus quam eos inventore recusandae illo nostrum
        distinctio debitis vero, deleniti laudantium error voluptatibus modi.
        Neque enim numquam odit nostrum dolorem earum illo temporibus reiciendis
        exercitationem repudiandae! Odio vel distinctio numquam nam fuga ut
        recusandae. Voluptatibus rerum dolore vero dolores consequuntur
        pariatur, sapiente, et incidunt quos aliquam, deleniti adipisci delectus
        nulla. Tempore libero suscipit dolor similique fugit.
      </p>
      <button
        aria-haspopup="true"
        aria-expanded={open}
        ref={triggerRef}
        onClick={() => setOpen(true)}
      >
        Open 1
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non odit eos
        iure sunt sapiente a blanditiis recusandae vel optio pariatur. Nesciunt
        odit rem, dolorem qui inventore optio blanditiis et esse. Consequatur
        sint ipsam, molestias nisi maxime magni neque cum itaque, nesciunt
        fugiat delectus aut ducimus quidem iusto. Dolor, ut veritatis. Pariatur
        at tempore laudantium alias, blanditiis enim laboriosam ipsa iusto. Et,
        maxime molestias repellendus quam eos inventore recusandae illo nostrum
        distinctio debitis vero, deleniti laudantium error voluptatibus modi.
        Neque enim numquam odit nostrum dolorem earum illo temporibus reiciendis
        exercitationem repudiandae! Odio vel distinctio numquam nam fuga ut
        recusandae. Voluptatibus rerum dolore vero dolores consequuntur
        pariatur, sapiente, et incidunt quos aliquam, deleniti adipisci delectus
        nulla. Tempore libero suscipit dolor similique fugit.
      </p>{" "}
      <button onClick={() => setOpen(true)}>Open 2</button>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non odit eos
        iure sunt sapiente a blanditiis recusandae vel optio pariatur. Nesciunt
        odit rem, dolorem qui inventore optio blanditiis et esse. Consequatur
        sint ipsam, molestias nisi maxime magni neque cum itaque, nesciunt
        fugiat delectus aut ducimus quidem iusto. Dolor, ut veritatis. Pariatur
        at tempore laudantium alias, blanditiis enim laboriosam ipsa iusto. Et,
        maxime molestias repellendus quam eos inventore recusandae illo nostrum
        distinctio debitis vero, deleniti laudantium error voluptatibus modi.
        Neque enim numquam odit nostrum dolorem earum illo temporibus reiciendis
        exercitationem repudiandae! Odio vel distinctio numquam nam fuga ut
        recusandae. Voluptatibus rerum dolore vero dolores consequuntur
        pariatur, sapiente, et incidunt quos aliquam, deleniti adipisci delectus
        nulla. Tempore libero suscipit dolor similique fugit.
      </p>{" "}
      <button onClick={() => setOpen(true)}>Open 3</button>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non odit eos
        iure sunt sapiente a blanditiis recusandae vel optio pariatur. Nesciunt
        odit rem, dolorem qui inventore optio blanditiis et esse. Consequatur
        sint ipsam, molestias nisi maxime magni neque cum itaque, nesciunt
        fugiat delectus aut ducimus quidem iusto. Dolor, ut veritatis. Pariatur
        at tempore laudantium alias, blanditiis enim laboriosam ipsa iusto. Et,
        maxime molestias repellendus quam eos inventore recusandae illo nostrum
        distinctio debitis vero, deleniti laudantium error voluptatibus modi.
        Neque enim numquam odit nostrum dolorem earum illo temporibus reiciendis
        exercitationem repudiandae! Odio vel distinctio numquam nam fuga ut
        recusandae. Voluptatibus rerum dolore vero dolores consequuntur
        pariatur, sapiente, et incidunt quos aliquam, deleniti adipisci delectus
        nulla. Tempore libero suscipit dolor similique fugit.
      </p>
      <button onClick={() => setOpen(true)}>Open 3</button>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non odit eos
        iure sunt sapiente a blanditiis recusandae vel optio pariatur. Nesciunt
        odit rem, dolorem qui inventore optio blanditiis et esse. Consequatur
        sint ipsam, molestias nisi maxime magni neque cum itaque, nesciunt
        fugiat delectus aut ducimus quidem iusto. Dolor, ut veritatis. Pariatur
        at tempore laudantium alias, blanditiis enim laboriosam ipsa iusto. Et,
        maxime molestias repellendus quam eos inventore recusandae illo nostrum
        distinctio debitis vero, deleniti laudantium error voluptatibus modi.
        Neque enim numquam odit nostrum dolorem earum illo temporibus reiciendis
        exercitationem repudiandae! Odio vel distinctio numquam nam fuga ut
        recusandae. Voluptatibus rerum dolore vero dolores consequuntur
        pariatur, sapiente, et incidunt quos aliquam, deleniti adipisci delectus
        nulla. Tempore libero suscipit dolor similique fugit.
      </p>
      <button onClick={() => setOpen(true)}>Open 3</button>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non odit eos
        iure sunt sapiente a blanditiis recusandae vel optio pariatur. Nesciunt
        odit rem, dolorem qui inventore optio blanditiis et esse. Consequatur
        sint ipsam, molestias nisi maxime magni neque cum itaque, nesciunt
        fugiat delectus aut ducimus quidem iusto. Dolor, ut veritatis. Pariatur
        at tempore laudantium alias, blanditiis enim laboriosam ipsa iusto. Et,
        maxime molestias repellendus quam eos inventore recusandae illo nostrum
        distinctio debitis vero, deleniti laudantium error voluptatibus modi.
        Neque enim numquam odit nostrum dolorem earum illo temporibus reiciendis
        exercitationem repudiandae! Odio vel distinctio numquam nam fuga ut
        recusandae. Voluptatibus rerum dolore vero dolores consequuntur
        pariatur, sapiente, et incidunt quos aliquam, deleniti adipisci delectus
        nulla. Tempore libero suscipit dolor similique fugit.
      </p>
      <button onClick={() => setOpen(true)}>Open 3</button>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non odit eos
        iure sunt sapiente a blanditiis recusandae vel optio pariatur. Nesciunt
        odit rem, dolorem qui inventore optio blanditiis et esse. Consequatur
        sint ipsam, molestias nisi maxime magni neque cum itaque, nesciunt
        fugiat delectus aut ducimus quidem iusto. Dolor, ut veritatis. Pariatur
        at tempore laudantium alias, blanditiis enim laboriosam ipsa iusto. Et,
        maxime molestias repellendus quam eos inventore recusandae illo nostrum
        distinctio debitis vero, deleniti laudantium error voluptatibus modi.
        Neque enim numquam odit nostrum dolorem earum illo temporibus reiciendis
        exercitationem repudiandae! Odio vel distinctio numquam nam fuga ut
        recusandae. Voluptatibus rerum dolore vero dolores consequuntur
        pariatur, sapiente, et incidunt quos aliquam, deleniti adipisci delectus
        nulla. Tempore libero suscipit dolor similique fugit.
      </p>
      <button onClick={() => setOpen(true)}>Open 3</button>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non odit eos
        iure sunt sapiente a blanditiis recusandae vel optio pariatur. Nesciunt
        odit rem, dolorem qui inventore optio blanditiis et esse. Consequatur
        sint ipsam, molestias nisi maxime magni neque cum itaque, nesciunt
        fugiat delectus aut ducimus quidem iusto. Dolor, ut veritatis. Pariatur
        at tempore laudantium alias, blanditiis enim laboriosam ipsa iusto. Et,
        maxime molestias repellendus quam eos inventore recusandae illo nostrum
        distinctio debitis vero, deleniti laudantium error voluptatibus modi.
        Neque enim numquam odit nostrum dolorem earum illo temporibus reiciendis
        exercitationem repudiandae! Odio vel distinctio numquam nam fuga ut
        recusandae. Voluptatibus rerum dolore vero dolores consequuntur
        pariatur, sapiente, et incidunt quos aliquam, deleniti adipisci delectus
        nulla. Tempore libero suscipit dolor similique fugit.
      </p>
      <button onClick={() => setOpen(true)}>Open 3</button>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non odit eos
        iure sunt sapiente a blanditiis recusandae vel optio pariatur. Nesciunt
        odit rem, dolorem qui inventore optio blanditiis et esse. Consequatur
        sint ipsam, molestias nisi maxime magni neque cum itaque, nesciunt
        fugiat delectus aut ducimus quidem iusto. Dolor, ut veritatis. Pariatur
        at tempore laudantium alias, blanditiis enim laboriosam ipsa iusto. Et,
        maxime molestias repellendus quam eos inventore recusandae illo nostrum
        distinctio debitis vero, deleniti laudantium error voluptatibus modi.
        Neque enim numquam odit nostrum dolorem earum illo temporibus reiciendis
        exercitationem repudiandae! Odio vel distinctio numquam nam fuga ut
        recusandae. Voluptatibus rerum dolore vero dolores consequuntur
        pariatur, sapiente, et incidunt quos aliquam, deleniti adipisci delectus
        nulla. Tempore libero suscipit dolor similique fugit.
      </p>
      <button onClick={() => setOpen(true)}>Open 3</button>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non odit eos
        iure sunt sapiente a blanditiis recusandae vel optio pariatur. Nesciunt
        odit rem, dolorem qui inventore optio blanditiis et esse. Consequatur
        sint ipsam, molestias nisi maxime magni neque cum itaque, nesciunt
        fugiat delectus aut ducimus quidem iusto. Dolor, ut veritatis. Pariatur
        at tempore laudantium alias, blanditiis enim laboriosam ipsa iusto. Et,
        maxime molestias repellendus quam eos inventore recusandae illo nostrum
        distinctio debitis vero, deleniti laudantium error voluptatibus modi.
        Neque enim numquam odit nostrum dolorem earum illo temporibus reiciendis
        exercitationem repudiandae! Odio vel distinctio numquam nam fuga ut
        recusandae. Voluptatibus rerum dolore vero dolores consequuntur
        pariatur, sapiente, et incidunt quos aliquam, deleniti adipisci delectus
        nulla. Tempore libero suscipit dolor similique fugit.
      </p>
    </>
  );
}

export default ModalWrapper;
