import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RedoAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RedoAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRedoAlt} {...props} />;
};

export default RedoAlt;
