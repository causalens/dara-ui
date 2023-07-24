import { faPencil } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Pencil icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Pencil = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPencil} {...props} />;
};

export default Pencil;
