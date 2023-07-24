import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Trash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Trash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTrash} {...props} />;
};

export default Trash;
