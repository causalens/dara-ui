import { faUndo } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Undo icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Undo = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUndo} {...props} />;
};

export default Undo;
