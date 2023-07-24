import { faLongArrowUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LongArrowUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LongArrowUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLongArrowUp} {...props} />;
};

export default LongArrowUp;
