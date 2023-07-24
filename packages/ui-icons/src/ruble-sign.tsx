import { faRubleSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RubleSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RubleSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRubleSign} {...props} />;
};

export default RubleSign;
