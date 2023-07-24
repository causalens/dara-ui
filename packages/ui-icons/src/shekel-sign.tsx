import { faShekelSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ShekelSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ShekelSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShekelSign} {...props} />;
};

export default ShekelSign;
