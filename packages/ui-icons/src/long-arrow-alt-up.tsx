import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LongArrowAltUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LongArrowAltUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLongArrowAltUp} {...props} />;
};

export default LongArrowAltUp;
