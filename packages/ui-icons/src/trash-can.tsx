import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TrashCan icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TrashCan = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTrashCan} {...props} />;
};

export default TrashCan;
