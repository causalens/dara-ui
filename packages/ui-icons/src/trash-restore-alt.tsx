import { faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TrashRestoreAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TrashRestoreAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTrashRestoreAlt} {...props} />;
};

export default TrashRestoreAlt;
