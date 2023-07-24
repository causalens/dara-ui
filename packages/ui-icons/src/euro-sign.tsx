import { faEuroSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * EuroSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const EuroSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEuroSign} {...props} />;
};

export default EuroSign;
