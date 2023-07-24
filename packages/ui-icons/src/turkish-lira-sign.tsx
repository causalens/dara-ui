import { faTurkishLiraSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TurkishLiraSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TurkishLiraSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTurkishLiraSign} {...props} />;
};

export default TurkishLiraSign;
