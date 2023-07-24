import { faTrashRestore } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TrashRestore icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TrashRestore = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTrashRestore} {...props} />;
};

export default TrashRestore;
