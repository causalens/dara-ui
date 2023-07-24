import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LongArrowLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LongArrowLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLongArrowLeft} {...props} />;
};

export default LongArrowLeft;
