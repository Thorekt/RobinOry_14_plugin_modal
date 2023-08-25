import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';
import close from './close-icon.svg';

/**
 * Modal component (modal)
 * @description Renders a editable modal
 * @param {string} title - Modal title
 * @param {node} children - Modal content
 * @param {function} onClickClose - Function to close modal
 * @param {boolean} isModalOpen - Modal state
 * @param {object} classNames - Custom classNames
 * @param {string} classNames.container - Custom classNames for modal-container
 * @param {string} classNames.content - Custom classNames for modal-content
 * @param {string} classNames.header - Custom classNames for modal-header
 * @param {string} classNames.title - Custom classNames for modal-title
 * @param {string} classNames.close - Custom classNames for modal-close
 * @param {string} classNames.body - Custom classNames for modal-body
 * @returns {JSX.Element}
 */
export default function Modal({
  title, children, onClickClose, isModalOpen, classNames,
}) {
  const containerClassNames = `${isModalOpen ? 'active' : ''} ${classNames.container} modal-container`;
  const contentClassNames = `${classNames.content} modal-content`;
  const headerClassNames = `${classNames.header} modal-header`;
  const titleClassNames = `${classNames.title} modal-title`;
  const closeClassNames = `${classNames.close} modal-close`;
  const bodyClassNames = `${classNames.body} modal-body`;
  return (
    <div className={containerClassNames}>
      <div className={contentClassNames}>
        <header className={headerClassNames}>
          <h3 className={titleClassNames}>{title}</h3>
          <button type="button" className={closeClassNames} onClick={onClickClose}>
            <img src={close} alt="close modal button" />
          </button>
        </header>
        <div className={bodyClassNames}>
          {children}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClickClose: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  classNames: PropTypes.shape({
    container: PropTypes.string,
    content: PropTypes.string,
    header: PropTypes.string,
    title: PropTypes.string,
    close: PropTypes.string,
    body: PropTypes.string,
  }),
};

Modal.defaultProps = {
  classNames: {
    container: '',
    content: '',
    header: '',
    title: '',
    close: '',
    body: '',
  },
};
