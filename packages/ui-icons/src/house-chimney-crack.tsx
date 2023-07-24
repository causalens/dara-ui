import { faHouseChimneyCrack } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseChimneyCrack icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseChimneyCrack = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseChimneyCrack} {...props} />;
};

export default HouseChimneyCrack;
