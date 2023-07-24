import { faLongArrowDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LongArrowDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LongArrowDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLongArrowDown} {...props} />;
};

export default LongArrowDown;
