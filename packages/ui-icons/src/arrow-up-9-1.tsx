import { faArrowUp91 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowUp91 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowUp91 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowUp91} {...props} />;
};

export default ArrowUp91;
