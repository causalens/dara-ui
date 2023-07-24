import { faUnsorted } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Unsorted icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Unsorted = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUnsorted} {...props} />;
};

export default Unsorted;
