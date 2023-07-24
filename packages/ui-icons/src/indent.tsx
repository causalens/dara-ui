import { faIndent } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Indent icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Indent = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faIndent} {...props} />;
};

export default Indent;
