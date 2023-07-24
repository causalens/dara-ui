import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PencilAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PencilAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPencilAlt} {...props} />;
};

export default PencilAlt;
