import { faCruzeiroSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CruzeiroSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CruzeiroSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCruzeiroSign} {...props} />;
};

export default CruzeiroSign;
