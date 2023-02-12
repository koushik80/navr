import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>I accept</Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

    return (
      <div className="relative">
        <Button onClick={handleClick} primary>
          Open Modal
        </Button>
        {showModal && modal}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut condimentum diam, nec mollis erat. Cras consectetur libero justo, sit amet fermentum leo suscipit a. Phasellus eu sodales justo, sit amet condimentum augue. Etiam gravida tempus tortor sed suscipit. Nulla facilisi. Etiam nec lobortis tellus. Maecenas sed felis porta, egestas sem vitae, malesuada eros. Nam ac ante tempor, tempor dolor ac, dapibus nisi. Aenean ut dictum ex. Pellentesque venenatis libero nec imperdiet bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor purus ut ante placerat luctus. Duis vitae pharetra turpis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut condimentum diam, nec mollis erat. Cras consectetur libero justo, sit amet fermentum leo suscipit a. Phasellus eu sodales justo, sit amet condimentum augue. Etiam gravida tempus tortor sed suscipit. Nulla facilisi. Etiam nec lobortis tellus. Maecenas sed felis porta, egestas sem vitae, malesuada eros. Nam ac ante tempor, tempor dolor ac, dapibus nisi. Aenean ut dictum ex. Pellentesque venenatis libero nec imperdiet bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor purus ut ante placerat luctus. Duis vitae pharetra turpis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut condimentum diam, nec mollis erat. Cras consectetur libero justo, sit amet fermentum leo suscipit a. Phasellus eu sodales justo, sit amet condimentum augue. Etiam gravida tempus tortor sed suscipit. Nulla facilisi. Etiam nec lobortis tellus. Maecenas sed felis porta, egestas sem vitae, malesuada eros. Nam ac ante tempor, tempor dolor ac, dapibus nisi. Aenean ut dictum ex. Pellentesque venenatis libero nec imperdiet bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor purus ut ante placerat luctus. Duis vitae pharetra turpis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut condimentum diam, nec mollis erat. Cras consectetur libero justo, sit amet fermentum leo suscipit a. Phasellus eu sodales justo, sit amet condimentum augue. Etiam gravida tempus tortor sed suscipit. Nulla facilisi. Etiam nec lobortis tellus. Maecenas sed felis porta, egestas sem vitae, malesuada eros. Nam ac ante tempor, tempor dolor ac, dapibus nisi. Aenean ut dictum ex. Pellentesque venenatis libero nec imperdiet bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor purus ut ante placerat luctus. Duis vitae pharetra turpis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut condimentum diam, nec mollis erat. Cras consectetur libero justo, sit amet fermentum leo suscipit a. Phasellus eu sodales justo, sit amet condimentum augue. Etiam gravida tempus tortor sed suscipit. Nulla facilisi. Etiam nec lobortis tellus. Maecenas sed felis porta, egestas sem vitae, malesuada eros. Nam ac ante tempor, tempor dolor ac, dapibus nisi. Aenean ut dictum ex. Pellentesque venenatis libero nec imperdiet bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor purus ut ante placerat luctus. Duis vitae pharetra turpis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut condimentum diam, nec mollis erat. Cras consectetur libero justo, sit amet fermentum leo suscipit a. Phasellus eu sodales justo, sit amet condimentum augue. Etiam gravida tempus tortor sed suscipit. Nulla facilisi. Etiam nec lobortis tellus. Maecenas sed felis porta, egestas sem vitae, malesuada eros. Nam ac ante tempor, tempor dolor ac, dapibus nisi. Aenean ut dictum ex. Pellentesque venenatis libero nec imperdiet bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor purus ut ante placerat luctus. Duis vitae pharetra turpis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut condimentum diam, nec mollis erat. Cras consectetur libero justo, sit amet fermentum leo suscipit a. Phasellus eu sodales justo, sit amet condimentum augue. Etiam gravida tempus tortor sed suscipit. Nulla facilisi. Etiam nec lobortis tellus. Maecenas sed felis porta, egestas sem vitae, malesuada eros. Nam ac ante tempor, tempor dolor ac, dapibus nisi. Aenean ut dictum ex. Pellentesque venenatis libero nec imperdiet bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor purus ut ante placerat luctus. Duis vitae pharetra turpis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut condimentum diam, nec mollis erat. Cras consectetur libero justo, sit amet fermentum leo suscipit a. Phasellus eu sodales justo, sit amet condimentum augue. Etiam gravida tempus tortor sed suscipit. Nulla facilisi. Etiam nec lobortis tellus. Maecenas sed felis porta, egestas sem vitae, malesuada eros. Nam ac ante tempor, tempor dolor ac, dapibus nisi. Aenean ut dictum ex. Pellentesque venenatis libero nec imperdiet bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor purus ut ante placerat luctus. Duis vitae pharetra turpis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut condimentum diam, nec mollis erat. Cras consectetur libero justo, sit amet fermentum leo suscipit a. Phasellus eu sodales justo, sit amet condimentum augue. Etiam gravida tempus tortor sed suscipit. Nulla facilisi. Etiam nec lobortis tellus. Maecenas sed felis porta, egestas sem vitae, malesuada eros. Nam ac ante tempor, tempor dolor ac, dapibus nisi. Aenean ut dictum ex. Pellentesque venenatis libero nec imperdiet bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor purus ut ante placerat luctus. Duis vitae pharetra turpis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut condimentum diam, nec mollis erat. Cras consectetur libero justo, sit amet fermentum leo suscipit a. Phasellus eu sodales justo, sit amet condimentum augue. Etiam gravida tempus tortor sed suscipit. Nulla facilisi. Etiam nec lobortis tellus. Maecenas sed felis porta, egestas sem vitae, malesuada eros. Nam ac ante tempor, tempor dolor ac, dapibus nisi. Aenean ut dictum ex. Pellentesque venenatis libero nec imperdiet bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor purus ut ante placerat luctus. Duis vitae pharetra turpis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut condimentum diam, nec mollis erat. Cras consectetur libero justo, sit amet fermentum leo suscipit a. Phasellus eu sodales justo, sit amet condimentum augue. Etiam gravida tempus tortor sed suscipit. Nulla facilisi. Etiam nec lobortis tellus. Maecenas sed felis porta, egestas sem vitae, malesuada eros. Nam ac ante tempor, tempor dolor ac, dapibus nisi. Aenean ut dictum ex. Pellentesque venenatis libero nec imperdiet bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor purus ut ante placerat luctus. Duis vitae pharetra turpis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut condimentum diam, nec mollis erat. Cras consectetur libero justo, sit amet fermentum leo suscipit a. Phasellus eu sodales justo, sit amet condimentum augue. Etiam gravida tempus tortor sed suscipit. Nulla facilisi. Etiam nec lobortis tellus. Maecenas sed felis porta, egestas sem vitae, malesuada eros. Nam ac ante tempor, tempor dolor ac, dapibus nisi. Aenean ut dictum ex. Pellentesque venenatis libero nec imperdiet bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor purus ut ante placerat luctus. Duis vitae pharetra turpis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut condimentum diam, nec mollis erat. Cras consectetur libero justo, sit amet fermentum leo suscipit a. Phasellus eu sodales justo, sit amet condimentum augue. Etiam gravida tempus tortor sed suscipit. Nulla facilisi. Etiam nec lobortis tellus. Maecenas sed felis porta, egestas sem vitae, malesuada eros. Nam ac ante tempor, tempor dolor ac, dapibus nisi. Aenean ut dictum ex. Pellentesque venenatis libero nec imperdiet bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor purus ut ante placerat luctus. Duis vitae pharetra turpis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut condimentum diam, nec mollis erat. Cras consectetur libero justo, sit amet fermentum leo suscipit a. Phasellus eu sodales justo, sit amet condimentum augue. Etiam gravida tempus tortor sed suscipit. Nulla facilisi. Etiam nec lobortis tellus. Maecenas sed felis porta, egestas sem vitae, malesuada eros. Nam ac ante tempor, tempor dolor ac, dapibus nisi. Aenean ut dictum ex. Pellentesque venenatis libero nec imperdiet bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor purus ut ante placerat luctus. Duis vitae pharetra turpis.
        </p>
      </div>
    );
}

export default ModalPage;