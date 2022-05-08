import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LiveRegion = ({className, textContent}) => {
  const [message, setMessage] = useState('');
  setTimeout(() => {
    setMessage(textContent);
  }, 2000);
  return (
    <div className={className}
      role="status"
      aria-live="polite"
      aria-atomic="true">
      {message}
    </div>
  );
};

LiveRegion.propTypes = {
  className: PropTypes.string.isRequired,
  textContent: PropTypes.string,
};
// bootstrap sr only class
export const StyledLiveRegion = styled(LiveRegion)`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
`;
