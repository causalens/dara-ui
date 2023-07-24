import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LongArrowAltLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LongArrowAltLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLongArrowAltLeft} {...props} />;
};

export default LongArrowAltLeft;
