import { faRupiahSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RupiahSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RupiahSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRupiahSign} {...props} />;
};

export default RupiahSign;
