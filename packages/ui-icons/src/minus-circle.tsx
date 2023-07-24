import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MinusCircle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MinusCircle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMinusCircle} {...props} />;
};

export default MinusCircle;
