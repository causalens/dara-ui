import { faReorder } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Reorder icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Reorder = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faReorder} {...props} />;
};

export default Reorder;
