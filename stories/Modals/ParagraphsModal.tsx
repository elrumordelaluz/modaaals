import React from 'react'

export default function ParagraphsModal({ closeModal, focusRef }) {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget
        metus venenatis odio mattis euismod sed ut massa. Cras euismod sem in mi
        molestie tempor. Proin neque massa, tincidunt in rutrum et, lacinia quis
        eros. Sed dignissim massa fermentum arcu porttitor ullamcorper. Maecenas
        lacinia lorem nec odio mollis faucibus. Sed sed quam lectus. Integer
        neque felis, condimentum eget sollicitudin a, ultricies sed neque.
      </p>

      <p>
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Sed interdum tortor ut pulvinar viverra. Sed rutrum
        laoreet vehicula. Phasellus id ultricies tortor. Praesent rutrum mauris
        nec diam venenatis aliquet. Donec non scelerisque lacus. Nullam
        scelerisque ipsum eu nibh facilisis mollis. Vestibulum vestibulum, nulla
        nec porta dignissim, purus risus consequat justo, vitae feugiat enim
        nulla quis elit. Nulla non mi velit.
      </p>

      <p>
        Nulla auctor purus pretium, tristique nibh fringilla, interdum mauris.
        Praesent est enim, ultrices pretium sapien ut, sollicitudin efficitur
        augue. Maecenas risus felis, vehicula vel rhoncus ut, maximus vel nisl.
        Nulla et laoreet libero. Quisque vehicula purus eget quam ultricies, id
        malesuada urna faucibus. Maecenas sodales scelerisque ligula, id
        fermentum nisi blandit id. Pellentesque blandit arcu vitae diam
        molestie, a lobortis turpis condimentum. Suspendisse cursus augue nisl.
        Fusce vel neque at nulla consequat convallis a eget nibh.
      </p>

      <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Maecenas cursus sed nisi id pretium. Suspendisse potenti.
        Proin ut mattis est, blandit ullamcorper quam. Nam sapien massa,
        vestibulum sit amet arcu non, condimentum pharetra nisl. Sed suscipit
        tincidunt maximus. Proin feugiat velit vel ex gravida, nec consequat
        magna bibendum. Vestibulum lacinia semper eros quis euismod. Quisque
        eget tincidunt magna, quis consequat justo. Integer condimentum tempor
        nunc, at hendrerit metus fringilla ac. Donec orci tortor, iaculis
        molestie magna at, pulvinar pellentesque nisl. Vestibulum non elit
        massa.
      </p>

      <p>
        Vestibulum finibus lacinia nibh, id laoreet odio pellentesque non.
        Curabitur tempor odio a nisi condimentum tempor. Sed sem metus, faucibus
        sit amet consectetur ac, molestie at enim. Nunc luctus orci sit amet
        euismod pulvinar. Sed a gravida elit. Curabitur non elementum ligula.
        Nam efficitur volutpat tellus, tempor pellentesque metus aliquam ac. Nam
        nec mattis arcu, et ullamcorper nisl. Aliquam erat volutpat. Nullam non
        pellentesque nibh.{' '}
      </p>
      <button ref={focusRef} onClick={closeModal}>
        close
      </button>
    </div>
  )
}
