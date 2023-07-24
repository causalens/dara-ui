import { faTachographDigital } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TachographDigital icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TachographDigital = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTachographDigital} {...props} />;
};

export default TachographDigital;
