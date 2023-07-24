import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UndoAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UndoAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUndoAlt} {...props} />;
};

export default UndoAlt;
