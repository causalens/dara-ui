import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LongArrowAltDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LongArrowAltDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLongArrowAltDown} {...props} />;
};

export default LongArrowAltDown;
