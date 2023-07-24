import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TrashAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TrashAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTrashAlt} {...props} />;
};

export default TrashAlt;
