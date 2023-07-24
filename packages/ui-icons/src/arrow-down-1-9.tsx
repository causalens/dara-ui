import { faArrowDown19 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowDown19 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowDown19 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowDown19} {...props} />;
};

export default ArrowDown19;
