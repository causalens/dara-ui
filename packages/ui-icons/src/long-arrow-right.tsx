import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LongArrowRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LongArrowRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLongArrowRight} {...props} />;
};

export default LongArrowRight;
