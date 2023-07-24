import { faArrowUp19 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowUp19 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowUp19 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowUp19} {...props} />;
};

export default ArrowUp19;
