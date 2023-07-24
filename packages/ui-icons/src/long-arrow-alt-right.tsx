import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LongArrowAltRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LongArrowAltRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLongArrowAltRight} {...props} />;
};

export default LongArrowAltRight;
